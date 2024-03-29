"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCustomer } from "@/data/create-customer";
import { IFormErrors } from "@/interfaces/IFormErrors";
import { phoneMask } from "@/utils/phone-mask";
import { PlusIcon } from "@radix-ui/react-icons";
import { ChangeEvent, useLayoutEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { z } from "zod";
import { ErrorMessage } from "./error-message";

export function CreateCustomer() {
  const [state, handeCreateCustomer] = useFormState(createCustomer, {
    succeededAt: null,
    errors: null,
  });
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<IFormErrors>();
  const formRef = useRef<HTMLFormElement>(null);

  useLayoutEffect(() => {
    if (state.succeededAt !== null) {
      handleReset();
    }

    if (state.errors !== null) {
      setErrors(state.errors);
    }
  }, [state]);

  function phoneApplyMask(event: ChangeEvent<HTMLInputElement>) {
    const result = z
      .string()
      .max(15)
      .transform((value) => phoneMask(value))
      .safeParse(event.currentTarget.value);

    if (result.success) setPhone(result.data);
  }

  function handleReset() {
    setPhone("");
    formRef.current?.reset();
    document.getElementById("closeDialog")?.click();
    setErrors(undefined);
  }

  return (
    <Dialog onOpenChange={handleReset}>
      <DialogTrigger asChild>
        <Button className="w-full flex items-center gap-2 lg:w-auto">
          <PlusIcon className="w-5 h-5" />
          Cliente
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] sm:max-w-[425px]">
        <form action={handeCreateCustomer} id="create-form" ref={formRef}>
          <DialogHeader>
            <DialogTitle>Cadastrar Cliente</DialogTitle>
            <DialogDescription>
              Cadastre um novo cliente em nosso sistema.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="ml-1">
                Name
              </Label>
              <Input id="name" name="name" />

              <ErrorMessage error={errors?.name} />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="ml-1">
                E-mail
              </Label>
              <Input id="email" name="email" />

              <ErrorMessage error={errors?.email} />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="ml-1">
                Telefone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={phone}
                onChange={phoneApplyMask}
              />

              <ErrorMessage error={errors?.phone} />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="x" className="ml-1">
                  Coordenada X
                </Label>
                <Input
                  type="number"
                  id="x"
                  name="x"
                  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />

                <ErrorMessage error={errors?.x} />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="y" className="ml-1">
                  Coordenada Y
                </Label>
                <Input
                  type="number"
                  id="y"
                  name="y"
                  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />

                <ErrorMessage error={errors?.y} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" form="create-form">
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
