import HM from '../'

test('initialize an empty hashmap', () => {
  const hm = new HM(10)
  expect(hm.count).toBe(0)
  expect(hm.load()).toBe(0)
  expect(hm.size).toBe(10)
})

test('HM.hash empty string returns 0', () => {
  const hm = new HM(10)
  expect(hm.constructor.hash('')).toBe(0)
})

test('HM.set', () => {
  const hm = new HM(10)
  expect(hm.set('key1', 100)).toBe(true)
  expect(hm.set('key2', 200)).toBe(true)
  expect(hm.set('key3', 300)).toBe(true)
})

test('HM.set', () => {
  const hm = new HM(10)
  expect(hm.set('key1', 100)).toBe(true)
  expect(hm.set('key2', 200)).toBe(true)
  expect(hm.set('key3', 300)).toBe(true)
})

test('HM.set overwrite key', () => {
  const hm = new HM(10)
  hm.set('key1', 100)
  expect(hm.get('key1')).toBe(100)
  hm.set('key1', 200)
  expect(hm.get('key1')).toBe(200)
  hm.set('key1', 300)
  expect(hm.get('key1')).toBe(300)
})

test('HM.set different value types', () => {
  const hm = new HM(10)

  var map = {
    key1: 100,
    key2: (a, b) => {
      return a + b
    },
    key3: true,
    key4: null,
    key5: undefined,
    key6: { a: 'b' },
  }

  for (let i in map) {
    hm.set(i, map[i])
  }

  for (let i in map) {
    expect(hm.get(i)).toBe(map[i])
  }
})

test('HM.set fails over capacity', () => {
  const hm = new HM(10)
  for (var i = 1; i <= 10; i++) {
    expect(hm.set(`key${i}`, i * 100)).toBe(true)
  }

  expect(hm.set(`key11`, 1100)).toBe(false)
  expect(hm.set(`key12`, 1200)).toBe(false)
})

test('HM.get existing keys', () => {
  const hm = new HM(10)
  hm.set('key1', 100)
  hm.set('key2', 200)
  hm.set('key3', 300)
  expect(hm.get('key1')).toBe(100)
  expect(hm.get('key2')).toBe(200)
  expect(hm.get('key3')).toBe(300)
})

test('HM.get non-existent keys', () => {
  const hm = new HM(10)
  hm.set('key1', 100)
  hm.set('key2', 100)
  hm.set('key3', 100)
  expect(hm.get('key4')).toBe(null)
})

test('HM.delete', () => {
  const hm = new HM(10)
  hm.set('key1', 1)
  expect(hm.get('key1')).toBe(1)
  hm.delete('key1')
  expect(hm.get('key1')).toBe(null)
})

test('HM.delete non-existent keys', () => {
  const hm = new HM(10)
  expect(hm.delete('key1')).toBe(null)
  expect(hm.delete('key1')).toBe(null)
})


test('HM.load', () => {
  const hm = new HM(1000)
  for (let i = 0; i < 100; i += 1) {
    hm.set(`${i}`, i)
  }

  expect(hm.load()).toBe(100 / 1000)
})

test('HM.load at half', () => {
  const hm = new HM(1000)
  for (let i = 0; i < 500; i += 1) {
    hm.set(`${i}`, i)
  }

  expect(hm.load()).toBe(0.5)
})

test('HM.load at capacity', () => {
  const hm = new HM(1000)
  for (let i = 0; i < 1000; i += 1) {
    hm.set(`${i}`, i)
  }

  expect(hm.load()).toBe(1)
})

test('HM.load over capacity', () => {
  const hm = new HM(1000)
  for (let i = 0; i < 10000; i += 1) {
    hm.set(`${i}`, i)
  }

  expect(hm.load()).toBe(1)
})


test('HM.set with collisions', () => {
  const hm = new HM(1000)
  for (let i = 0; i < 1000; i += 1) {
    expect(hm.set(`${i}`, i)).toBe(true)
  }

  for (let i = 0; i < 1000; i += 1) {
    expect(hm.get(`${i}`)).toBe(i)
  }
})

test('HM.delete with collisions', () => {
  const hm = new HM(1000)
  for (let i = 0; i < 1000; i += 1) {
    hm.set(`${i}`, i)
  }

  for (let i = 0; i < 1000; i += 1) {
    expect(hm.delete(`${i}`)).toBe(i)
  }
})

test('HM.delete non existing elements with collions', () => {
  const hm = new HM(1000)
  for (let i = 0; i < 1000; i += 1) {
    hm.set(`${i}`, i)
  }

  for (let i = 10000; i >= 1000; i -= 1) {
    expect(hm.delete(`${i}`)).toBe(null)
  }

  for (let i = 999; i >= 0; i -= 1) {
    expect(hm.delete(`${i}`)).toBe(i)
  }
})

