import { jsUtils } from '@repo/utils';
import { DependencyList, useEffect, useLayoutEffect } from 'react';

type Destructor = () => void;

type AsyncEffectCallback = () =>
  | void
  | Destructor
  | Promise<void>
  | Promise<Destructor>;

const createAsyncEffectCallback = (asyncEffect: AsyncEffectCallback) => {
  const destructor = jsUtils.iife(asyncEffect);
  return () => {
    if (!destructor) return;

    if (destructor instanceof Promise) {
      jsUtils.iife(async () => {
        const awaitedDestructor = await destructor;
        if (awaitedDestructor) awaitedDestructor();
      });
    } else {
      jsUtils.iife(destructor);
    }
  };
};

const useAsyncEffect = (effect: AsyncEffectCallback, deps?: DependencyList) => {
  useEffect(createAsyncEffectCallback(effect), [deps]);
};

const useAsyncLayoutEffect = (
  effect: AsyncEffectCallback,
  deps?: DependencyList,
) => {
  useLayoutEffect(createAsyncEffectCallback(effect), [deps]);
};

export { useAsyncEffect, useAsyncLayoutEffect };
