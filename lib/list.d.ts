import { IOptions } from './options';
import { IReturnRow } from './index';
export { IArrayDeepInterface, IArrayDeep, IForeachArrayDeepCache, IForeachArrayDeepReturn } from './util';
import { IArrayDeepInterface } from './util';
export { IReturnRow };
export declare function glob_to_list_array(glob_ls: string[], options?: IOptions): IReturnRow[];
export declare function glob_to_list_array_deep(glob_ls: string[], options?: IOptions): IArrayDeepInterface<IReturnRow>;
export declare function pathToListRow(b: string, source_idx: number, options?: IOptions): IReturnRow;
declare const _default: typeof import("./list");
export default _default;
