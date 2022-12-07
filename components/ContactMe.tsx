import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:maicro894@gmail.com?subject=${formData.subject}&body=HI, my name is
    ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 
     justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-20  uppercase tracking-[20px] text-gray-500 text-2xl">
        ContactMe
      </h3>
      <div className=" flex flex-col space-y-5">
        <h4 className=" text-2xl font-semibold text-center">
          i just got just what you need.{" "}
          <span className=" underline decoration-[#F7AB0A]/50">let's talk</span>
        </h4>
        <div className=" space-y-2">
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className=" h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className=" text-xl">4125331281</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=" h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className=" text-xl">maicro894@gmail.com</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <MapPinIcon className=" h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className=" text-xl">123 develope lane</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className=" flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className=" contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className=" contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className=" contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className=" contactInput"
          />
          <button
            type="submit"
            className=" bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
