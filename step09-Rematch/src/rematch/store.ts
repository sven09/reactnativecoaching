import { init, RematchRootState } from '@rematch/core';
// import createLoadingPlugin from '@rematch/loading';
import { useDispatch } from 'react-redux';

import * as models from './models';
import createPersistPlugin, { getPersistor } from '@rematch/persist'


// const loading = createLoadingPlugin({});

const persistPlugin = createPersistPlugin({
	version: 2,
})


export const store = init({
	models,
	plugins: [persistPlugin],
});


export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type IRootState = RematchRootState<typeof models>;

export const useRematchDispatch = <D extends {}, MD>(selector: (dispatch: D) => MD) => {
	const dispatch = useDispatch<D>();
	return selector(dispatch);
};
