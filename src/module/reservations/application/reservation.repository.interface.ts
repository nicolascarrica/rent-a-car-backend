import { IBaseRepository } from "src/common/domain/base.repository";
import { Reservation } from "../domain/reservation.entity";

export interface IReservationRepository extends IBaseRepository<Reservation> {}