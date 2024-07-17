import BilletForm from "@/components/BilletsForm";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
export default function test() {
  // <BilletForm/>
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      variations: [{ image: "", comment: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "variations",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Add Money Bill</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Bill Name:</label>
          <input {...register("name")} />
        </div>
        <div>
          <label>Bill Description:</label>
          <textarea {...register("description")} />
        </div>
        <div>
          <h2>Variations</h2>
          {fields.map((item, index) => (
            <div key={item.id}>
              <label>Image:</label>
              <input type="file" {...register(`variations.${index}.image`)} />
              <label>Comment:</label>
              <input {...register(`variations.${index}.comment`)} />
              <button type="button" onClick={() => remove(index)}>
                Remove Variation
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ image: "", comment: "" })}
          >
            Add Variation
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
