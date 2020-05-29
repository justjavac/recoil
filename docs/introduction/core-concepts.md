---
title: 核心概念
---

## 概述

Recoil 允许你使用 _Selector_ (纯函数)创建一个从 _Atom_ (共享状态)下沉至组件的数据流转图谱。Atom 表示组件可以订阅的最小状态单元。Selector 可以同步或者异步更新。

## Atoms

Atom 是最小状态单元。它们可以被订阅和更新：当它更新时，所有订阅它的组件都会使用新数据重绘；它可以在运行时创建；它也可以在局部状态使用；同一个 Atom 可以被多个组件使用与共享。

使用 `atom` 方法创建 Atom 实例。

```javascript
const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});
```

Atom 需要一个唯一标识用于调试、数据持久化和状态查询的高阶方法。必须保证这个唯一标识全局唯一否则将会报错，创建时可以设置默认值。

在组件中使用 Hook 方法 `useRecoilState` 对 Atom 进行读写操作，参考 `React.useState`，区别在于这个状态可以在组件之间共享。

```jsx
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
      增大字号
    </button>
  );
}
```

点击按钮会依次增加按钮字号，其他组件也会使用相同的字号：

```jsx
function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <p style={{fontSize}}>这里的字号会同步增大</p>;
}
```

## Selectors

**Selector** 是一个入参为 Atom 或者其他 Selector 的纯函数。当它的上游 Atom 或者 Selector 更新时，它会进行重新计算。Selector 可以像 Atom 一样被组件订阅，当它更新时，订阅它的组件将会重新渲染。

Selector 通常用于计算一些基于原始状态的派生数据。因为不需要使用 reducer 来保证数据的一致性和有效性，所以可以避免冗余数据。我们使用 Atom 保存一点原始状态，其他数据都是在其基础上计算得来的。因为 Selector 会追踪使用它们的组件以及它们依赖的数据状态，所以函数式编程会比较高效。

因为 Seletor 和 Atom 给组件提供相同的方法，所以它们可以相互替代。

使用 `selector` 方法创建 Selector 实例。

```javascript
const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});
```

`get` 属性是一个计算函数，它可以使用入参 `get` 字段来访问输入的 Atom 和 Selector。当它访问其他 Atom 和 Selector 时，这层依赖关系会保证更新状态的同步。

参考上述 `fontSizeLabelState` 示例，它依赖于 `fontSizeState`。根据之前的描述，`fontSizeLabelState` 使用 `fontSizeState` 作为入参，并返回格式化之后的字号文本。

我们可以通过在 `useRecoilValue()` 方法中输入 Atom 或者 Selector 来获取对应的数据。这里不用 `useRecoilState()` 是因为 `fontSizeLabelState` 是一个不可写 Selector，更多细节参考 [Selector](/docs/api-reference/core/selector)。

```jsx
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div>当前字号: ${fontSizeLabel}</div>

      <button onClick={() => setFontSize(fontSize + 1)} style={{fontSize}}>
        增大字号
      </button>
    </>
  );
}
```

点击按钮可以看到按钮和文本的字号同时在更新。
