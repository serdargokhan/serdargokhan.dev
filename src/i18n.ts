import {getRequestConfig} from "next-intl/server";
import { notFound } from "next/navigation";
 
const locales = ["en", "tr"];
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale)) notFound();
 
  return {
    messages: (await import(`../translations/${locale}.json`)).default
  };
});