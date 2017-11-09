import * as Utils from './utils'

describe('convertToArray', () => {
	test('one item', () => {
		const text = 'foo'
		const result = Utils.convertToArray(text)
		expect(result).toEqual(['foo'])
	})

	test('multiple items', () => {
		const text = 'foo bar meow'
		const result = Utils.convertToArray(text)
		expect(result).toEqual(['foo', 'bar', 'meow'])
	})

	test('empty string', () => {
		const text = ''
		const result = Utils.convertToArray(text)
		expect(result).toEqual([''])
	})

	test('something else', () => {
		const text = ['foo']
		const result = Utils.convertToArray(text)
		expect(result).toEqual(['foo'])
	})
})

describe('addClasses', () => {
	test('zero to one class', () => {
		const el = { className: '' }
		const text = 'foo'
		Utils.addClasses(el, text)
		expect(el.className).toBe(' foo')
	})

	test('zero to many classes', () => {
		const el = { className: '' }
		const text = 'foo bar meow'
		Utils.addClasses(el, text)
		expect(el.className).toBe(' foo bar meow')
	})

	test('one to two classes', () => {
		const el = { className: 'hey' }
		const text = 'foo'
		Utils.addClasses(el, text)
		expect(el.className).toBe('hey foo')
	})

	test('one to many classes', () => {
		const el = { className: 'hey' }
		const text = 'foo bar meow'
		Utils.addClasses(el, text)
		expect(el.className).toBe('hey foo bar meow')
	})

	test('dedupe', () => {
		const el = { className: 'foo' }
		const text = 'foo bar meow'
		Utils.addClasses(el, text)
		expect(el.className).toBe('foo bar meow')
	})
})