import { Player } from "../../generated/prisma";

export interface DashboardDTO extends Player {
  ratio: number;
  gd: number;
}
