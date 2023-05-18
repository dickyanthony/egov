import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "./Style/ContactStyle";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const CV = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "dickyanthony0812@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="CV" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.85] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Curriculum Vitae</p>
          <h3 className={styles.sectionHeadText}>Dicky Anthony.</h3>

          <p className={styles.sectionSubText} class="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            eius dolore vel, voluptatum quisquam quidem!
          </p>
          <h2 className="font-medium text-gray-400 mt-4">HTML</h2>
          <div class="h-1.5 w-full rounded-md bg-gray-200">
            <div class="h-1.5 w-full rounded-md bg-blue-gradient"></div>
          </div>
          <h2 class="font-medium text-gray-400 mt-4">PHP</h2>
          <div class="h-1.5 w-full rounded-md bg-gray-200">
            <div class="h-1.5 w-[60%] rounded-md bg-blue-gradient"></div>
          </div>
          <h2 class="font-medium text-gray-400 mt-4">
            Javascript (React ,React Native)
          </h2>
          <div class="h-1.5 w-full rounded-md bg-gray-200 ">
            <div class="h-1.5 w-[80%] rounded-md bg-blue-gradient"></div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:w-[50%] xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(CV, "CV");
