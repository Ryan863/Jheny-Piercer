import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const OFFICIAL_PHONE = "556699162937";
export const FORMATTED_PHONE = "+55 (66) 9916-2937";
export const INSTAGRAM_HANDLE = "@jhenypiercer";
export const INSTAGRAM_URL = "https://www.instagram.com/jhenypiercer/";
export const FACEBOOK_URL = "https://www.facebook.com/people/jhenypiercer/100046971166825/";
export const ADDRESS_TEXT = "R. Alcides Rodrigues Junior, 1075 - QD 37, LT 1075, Núcleo Hab. São José Um, Rondonópolis - MT, 78715-702";
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("R. Alcides Rodrigues Junior, 1075, Rondonópolis - MT, 78715-702");

export function getWhatsAppUrl(customMessage?: string) {
  const defaultText =
    "Olá, Jheny! Gostaria de informações sobre agendamento de procedimento e catálogo de joias.";
  const text = customMessage || defaultText;
  return `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(text)}`;
}
