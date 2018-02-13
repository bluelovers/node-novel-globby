/**
 * Created by user on 2018/2/12/012.
 */

import * as Promise from 'bluebird';
export * from './index';
export * from './lib';

import novelGlobby from './index';

import {
	getOptions,
	returnGlobList,

	IApiWithReturnGlob,
	IOptionsWithReturnGlobList,

	IApiWithReturnGlobSync,
	IApiWithReturnGlobAsync,
} from './lib';

export function globbyASync(options: IOptionsWithReturnGlobList): Promise<string[]>
export function globbyASync(patterns?: string[], options?: IOptionsWithReturnGlobList): Promise<string[]>
export function globbyASync(patterns?, options: IOptionsWithReturnGlobList = {}): Promise<string[]>
{
	[patterns, options] = getOptions(patterns, options);

	return novelGlobby.globbyASync(patterns, options)
		.then(function (ls)
		{
			return returnGlobList(ls, options);
		})
	;
}

export namespace globbyASync
{
	export declare let async: IApiWithReturnGlobAsync;

	export function sync(options: IOptionsWithReturnGlobList): string[]
	export function sync(patterns?: string[], options?: IOptionsWithReturnGlobList): string[]
	export function sync(patterns?, options: IOptionsWithReturnGlobList = {}): string[]
	{
		[patterns, options] = getOptions(patterns, options);

		return returnGlobList(novelGlobby.globbySync(patterns, options), options);
	}
}

export const globbySync = globbyASync.sync as IApiWithReturnGlobSync;
globbyASync.async = globbyASync as IApiWithReturnGlobAsync;

export const async = globbyASync;
export const sync = globbyASync.sync as IApiWithReturnGlobSync;

export default globbyASync;
