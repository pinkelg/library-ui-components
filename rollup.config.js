import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default {
  input: ['src/index.ts'],
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    process.env.NODE_ENV === 'production' && terser(),
    postcss({
      plugins: [autoprefixer()],
      inject: false,
      extract: true,
      sourceMap: process.env.NODE_ENV === 'production' ? false : 'inline',
      minimize: process.env.NODE_ENV === 'production'
    })
  ]
};
