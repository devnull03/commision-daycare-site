import { writable } from "svelte/store";


export const navLinks = writable([
    {
      title: "Repayment Agreement policy",
      link: "/repayment-agreement-policy",
    },
    {
      title: "Supplies provided by parents",
      link: "/supplies-provided-by-parents",
    },
    {
      title: "Daily Routine",
      link: "/daily-routine",
    },
    {
      title: "Contact info",
      link: "/contact",
    },
    {
      title: "Address",
      link: "",
    },
  ])