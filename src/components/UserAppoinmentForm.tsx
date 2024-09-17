"use client";

import { serviceList } from "@/types/userType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  contact: z.string({ required_error: "Contact is required" }),
  address: z.string({ required_error: "Address is required" }),
  comment: z.string({ required_error: "Comment is required" }),
  bookingServices: z
    .array(z.string())
    .nonempty({ message: "Select your essential services" }),
});

export type AppoinmentFormDataType = z.infer<typeof formSchema>;

interface Props {
  isLoading: boolean;
  onSave: (appoinmentFormData: FormData) => void;
}

const UserAppoinmentForm = ({ isLoading, onSave }: Props) => {
  const form = useForm<AppoinmentFormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      address: "",
      comment: "",
      bookingServices: [],
    },
  });

  const onSubmit = (formDataJson: AppoinmentFormDataType) => {
    const formData = new FormData();

    formData.append(`name`, formDataJson.name);
    formData.append(`contact`, formDataJson.contact);
    formData.append(`address`, formDataJson.address);
    formData.append(`comment`, formDataJson.comment);

    formDataJson.bookingServices.forEach((service, index) => {
      formData.append(`bookingServices[${index}]`, service);
    });
    console.log(formDataJson);
    console.log(formData);
    onSave(formData);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container my-20 p-10 md:p-0 mx-auto space-y-5"
      >
        {/* DETAILS SECTION */}
        <div className="space-y-5">
          <div>
            <h2 className="font-bold text-2xl">Appoinment details</h2>
            <FormDescription>Write down about your health</FormDescription>
          </div>

          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="contact"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="address"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="comment"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discription</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please! Explain your health . . ."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <h2 className="font-bold text-2xl">Our Services</h2>
            <FormDescription>
              Select the services related to your problem
            </FormDescription>
          </div>
          <FormField
            name="bookingServices"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {serviceList.map((item) => (
                    <FormItem key={item} className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value.includes(item)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              field.onChange([...field.value, item]);
                            } else {
                              field.onChange(
                                field.value.filter(
                                  (val: string) => val !== item
                                )
                              );
                            }
                          }}
                        />
                      </FormControl>
                      <FormLabel>{item}</FormLabel>
                    </FormItem>
                  ))}
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 font-bold"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 size={18} className="animate-spin" />
              Submitting
            </span>
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default UserAppoinmentForm;
