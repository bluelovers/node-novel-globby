/**
 * Created by user on 2018/1/26/026.
 */
import * as Promise from 'bluebird';
import * as globby from 'globby';
export * from './lib';
export { globby };
import { IOptions, IReturnList } from './lib';
export declare function globbySync(options: IOptions): IReturnList;
export declare function globbySync(patterns?: string[], options?: IOptions): IReturnList;
export declare function globbyASync(options: IOptions): Promise<IReturnList>;
export declare function globbyASync(patterns?: string[], options?: IOptions): Promise<IReturnList>;
import * as self from './index';
export default self;
