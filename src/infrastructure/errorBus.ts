import { Subject } from "rxjs";
import IError from "./error";

export const errorBus = new Subject<IError>();