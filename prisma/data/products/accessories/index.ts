import { ProductSeed } from "@/prisma/types/product-seed";
import { sandiskExtreme } from "./memory-card/sandisk-extreme-microsdxc";
import { westernDigital } from "./memory-card/western-digital-microsdhc";
import { iphone15PlusMagsafe } from "./phone-case/iphone-15-plus-magsafe";
import { iphone17ProMaxMagSafe } from "./phone-case/iphone-17-pro-max-magsafe";
import { s26UltraCarbonCase } from "./phone-case/s26-ultra-carbon-case";
import { cellularlineMagCar } from "./phone-stand/cellularline-wireless-car";
import { fixedCarHolder } from "./phone-stand/fixed-iconiq-car-holder";
import { universalTableStand } from "./phone-stand/universal-table-stand";
import { cellularlineQi2 } from "./power-bank/cellularline-10000-qi2";
import { cellularlineElite } from "./power-bank/cellularline-elite-20000";
import { xiaomiIntegrated } from "./power-bank/xiaomi-20000-33w";
import { xiaomiLite } from "./power-bank/xiaomi-power-bank";
import { iphone17ProScreenProtector } from "./screen-protectors/iphone17pro-panzerglass";
import { iphone17ProMaxCameraLens } from "./screen-protectors/iphone17promax-camera-lens";
import { s26PlusScreenProtector } from "./screen-protectors/sS26plus-copter";
import { xiaomi17UltraScreenProtector } from "./screen-protectors/xiaomi17ultra-panzerglass";

export const accessoriesProducts: ProductSeed[] = [
  sandiskExtreme,
  westernDigital,
  iphone15PlusMagsafe,
  iphone17ProMaxMagSafe,
  s26UltraCarbonCase,
  cellularlineMagCar,
  fixedCarHolder,
  universalTableStand,
  cellularlineQi2,
  cellularlineElite,
  xiaomiIntegrated,
  xiaomiLite,
  iphone17ProScreenProtector,
  iphone17ProMaxCameraLens,
  s26PlusScreenProtector,
  xiaomi17UltraScreenProtector,
];
