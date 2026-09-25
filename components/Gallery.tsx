"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "./ui/Button";
import { GalleryItem } from "@/types/api";
import { motion } from "motion/react";

import Section from "@/components/ui/Section";
import Image from "next/image";
export default function Gallery({ data }: { data: GalleryItem[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const topRow = data.slice(0, 4);
  const bottomRow = data.slice(4, 7);
  const itemVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Section noMaxWidth>
        <div className="flex flex-col w-full">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "0px 0px -30% 0px",
            }}
            transition={{
              staggerChildren: 0.12,
            }}
          >
            {topRow.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="w-full h-64 relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  width={300}
                  height={300}
                  src={item.asset.url}
                  unoptimized
                  alt={item.description}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "0px 0px -30% 0px",
            }}
            transition={{
              staggerChildren: 0.12,
            }}
          >
            {bottomRow.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="w-full h-64 relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  width={300}
                  height={300}
                  src={item.asset.url}
                  alt={item.description}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {selectedImage &&
          createPortal(
            <div
              className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <figure
                className="relative max-w-4xl w-full bg-black h-screen rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.asset.url}
                  alt={selectedImage.description}
                  className="w-full max-h-[70vh] object-contain rounded"
                />
                <figcaption className="p-4">
                  <h3 className="uppercase text-2xl">
                    {selectedImage.description}
                  </h3>
                  <p className="mt-4 text-white text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae aspernatur iure exercitationem totam, laborum
                    laudantium delectus asperiores voluptas nihil sed nam
                    repudiandae qui fugiat odit incidunt nulla eaque culpa
                    aliquam.
                  </p>
                  <div className="flex justify-end mt-6">
                    <button className="border-t-2 border-b-2 border-white py-2 px-8 hover:bg-white/10 transition">
                      Read More
                    </button>
                  </div>
                </figcaption>
              </figure>
            </div>,
            document.body,
          )}
      </Section>
      <Button variant="danger" onClick={() => console.log("hej med dig!")}>
        Click me
      </Button>
    </>
  );
}
