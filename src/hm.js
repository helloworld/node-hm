// @flow

class Node {
  key: string
  value: any
  next: ?Node

  constructor(key: string, value: any) {
    this.key = key
    this.value = value
  }
}

export default class HashMap {
  size: number
  memory: Array<?Node>
  count: number
  hash: Function

  constructor(size: number): void {
    this.size = size
    this.memory = new Array(size)
    this.count = 0
  }

  static hash(str: string): number {
    let hash = 0
    if (str.length === 0) return hash

    for (let i = 0; i < str.length; i += 1) {
      const char = str.charCodeAt(i)
      /* eslint-disable */
      hash = (hash << 5) - hash + char
      hash &= hash
      /* eslint-enable */
    }
    return hash
  }

  index(key: string): number {
    return this.constructor.hash(key) % this.size
  }

  set(key: string, value: any): boolean {
    const index = this.index(key)
    const head: ?Node = this.memory[index]

    let curr: ?Node = head
    while (curr != null) {
      if (curr.key === key) {
        curr.value = value
        return true
      }

      curr = curr.next
    }

    if (this.count === this.size) {
      return false
    }

    this.count += 1
    const newNode: Node = new Node(key, value)
    newNode.next = head
    this.memory[index] = newNode

    return true
  }

  get(key: string): ?any {
    const index = this.index(key)

    let curr = this.memory[index]
    while (curr != null) {
      if (curr.key === key) {
        return curr.value
      }
      curr = curr.next
    }

    return null
  }

  delete(key: string) {
    const index = this.index(key)
    const head = this.memory[index]

    if (head == null) {
      return null
    }

    if (head.key === key) {
      const value = head.value
      this.memory[index] = head.next
      this.count -= 1
      return value
    }

    let prev = head
    let curr = head.next
    while (curr != null) {
      if (curr.key === key) {
        prev.next = curr.next
        this.count -= 1
        return curr.value
      }
      prev = curr
      curr = curr.next
    }

    return null
  }

  load(): number {
    return this.count / this.size
  }
}
