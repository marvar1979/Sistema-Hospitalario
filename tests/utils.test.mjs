import test from 'node:test';import assert from 'node:assert/strict';import {validatePatient,escapeHtml,newId} from '../src/utils.js';
test('valida datos correctos',()=>assert.equal(validatePatient({name:'Ana',document:'DEM-1',age:25}),''));
test('rechaza edades inválidas',()=>assert.match(validatePatient({name:'Ana',document:'DEM-1',age:130}),/edad/));
test('escapa HTML para evitar inyección',()=>assert.equal(escapeHtml('<script>'), '&lt;script&gt;'));
test('crea identificadores',()=>assert.ok(newId().length>5));
