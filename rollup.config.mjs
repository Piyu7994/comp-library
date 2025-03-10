import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.tsx', // Entry file for your library
  output: [
    {
      file: 'lib/commonjs/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'lib/module/index.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    alias({
      entries: [
        { find: 'react-native', replacement: 'react-native-web' }, // ✅ Alias react-native to react-native-web
      ],
    }),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
  ],
  external: ['react', 'react-native', 'react-native-web', 'react/jsx-runtime'],
};
