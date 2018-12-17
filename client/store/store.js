import Vuex from 'vuex';

import defaultState from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

const isDev = process.env.NODE_ENV === 'development';

export default () => {
    const store = new Vuex.Store({
        strict: isDev,
        state: defaultState,
        mutations,
        getters,
        actions,
        modules: {
            a: {
                namespaced: true,
                state: {
                    text: 111
                },
                mutations: {
                    updateText(state, text) { // 这里的 state 是 a 模块的 state
                        state.text = text;
                    }
                },
                getters: {
                    textPlus(state, getters, rootState) {
                        return state.text + rootState.b.text;
                    }
                },
                actions: {
                    add({ state, commit, rootState }) {
                        commit('updateCount', { num1: 666 }, { root: true });
                    }
                }
            },
            b: {
                namespaced: true,
                state: {
                    text: 222
                },
                actions: {
                    testAction({ commit }) {
                        commit('a/updateText', 'test text', { root: true });
                    }
                }
            }
        }
    });

    if (module.hot) {
        module.hot.accept([
            './state',
            './mutations',
            './actions',
            './getters'
        ], () => {
            const newState = require('./state').default;
            const newMutations = require('./mutations').default;
            const newActions = require('./actions').default;
            const newGetters = require('./getters').default;

            store.hotUpdate({
                state: newState,
                mutations: newMutations,
                actions: newActions,
                getters: newGetters
            });
        });
    }

    return store;
};
