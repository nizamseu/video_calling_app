"use client";
import { useSocket } from "@/lib/socketProvider";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function Home() {
  const socket = useSocket();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    socket.emit("room:join", (data) => {});
  };
  useEffect(() => {
    socket.on("room:join", (data) => {
      console.log("return data", data);
    });
  }, [socket]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          placeholder="email"
          type="email"
          className=" border  px-4 py-2 space-x-2"
          {...register("email")}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="room id"
          className=" border  px-4 py-2 space-x-2"
          {...register("roomid", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
