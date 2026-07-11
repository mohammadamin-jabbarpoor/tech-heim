import { ProductSeed } from "@/prisma/types/product-seed";
import { nintendoSwitch2 } from "./console/nintendo-switch-2";
import { ps5Pro } from "./console/ps5-pro";
import { logG920Driving } from "./controller/logitech-g920-driving";
import { naconXbox } from "./controller/nacon-unlimited-xbox";
import { nintendoCintroller } from "./controller/nintendo-joy-con-2";
import { ps5Dualsense } from "./controller/ps5-dualsense";
import { appleMagicKeyboard } from "./keyboard/apple-magic-keyboard";
import { razerBlackWidowV4 } from "./keyboard/razer-blackwidow-v4-pro";
import { razerHuntsmanMini } from "./keyboard/razer-huntsman-mini";
import { razerProTypeUltra } from "./keyboard/razer-pro-type-ultra";
import { appleMagicMouse } from "./mouse/apple-magic-mouse";
import { asusRogKeris } from "./mouse/asus-rog-keris-II-origin";
import { razerBasilikV3Pro } from "./mouse/razer-basilisk-v3-pro";
import { razerDeathAdderV4Pro } from "./mouse/razer-deathadder-v4-pro";

export const gamingProducts: ProductSeed[] = [
  nintendoSwitch2,
  ps5Pro,
  logG920Driving,
  naconXbox,
  nintendoCintroller,
  ps5Dualsense,
  appleMagicKeyboard,
  razerBlackWidowV4,
  razerHuntsmanMini,
  razerProTypeUltra,
  appleMagicMouse,
  asusRogKeris,
  razerBasilikV3Pro,
  razerDeathAdderV4Pro,
];
