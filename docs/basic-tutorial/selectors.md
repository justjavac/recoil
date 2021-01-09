---
title: Selectors
---

**选择器（selector）**表示**派生状态**的一部分 。你可以将派生状态视为将状态传递到纯函数的输出，该函数会以某种方式修改给定状态。

派生状态是一个强大的概念，因为派生状态使我们能够构建依赖于其他数据的动态数据。在我们的待办事项列表应用程序的上下文中，以下被视为派生状态：

- **筛选待办事项列表**：通过创建一个新列表，筛选待办事项列表从完整的待办事项列表派生，该列表根据某些条件（如筛选出已完成的项目）筛选出某些项目。

- **待办事项列表统计信息**：通过计算列表中的一些有特定作用的的属性（如列表中的项目总数、已完成项目数和已完成项目的百分比），待办事项列表统计信息从完整待办事项列表派生。

要实现筛选待办事项列表，我们需要选择一组筛选器条件，其值可以保存在 atom 中。我们将使用的筛选器选项包括："显示全部"，"显示已完成"和"显示未完成"。默认值为"显示全部"：

```javascript
const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});
```

使用`todoListFilterState`和`todoListState`，我们可以构建一个 "筛选的待办事项状态" selector， 它派生一个筛选的列表：

```javascript
const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
```

`filteredTodoListState`内部跟踪两个依赖项：`todoListFilterState`和`todoListState`，以便如果其中任何一个依赖项发生更改，它将重新运行（re-runs）。

> 从组件的角度来看，可以使用用于读取 atom 的相同 hook 来读取 selector。但是，需要注意的是，某些 hook 仅适用于 **可写状态**（即`useRecoilState()`）。所有 atom 都是可写状态，但只有某些 selector 被视为可写状态（同时具有`get`和`set`属性的 selector）。有关本主题的详细信息，请参阅[核心概念](/docs/introduction/core-concepts)页面。

显示我们筛选的 todoList 非常简单，只需更改`TodoList`组件中的一行：

```jsx
function TodoList() {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}
```

请注意，UI 与`todoListFilterState`的默认值为`"显示全部"`相同。为了更改筛选器，我们需要实现`TodoListFilters`组件：

```jsx
function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({target: {value}}) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
```

通过几行代码，我们成功实现了筛选！我们将使用相同的概念来实现`TodoListStats`组件。

我们要显示以下统计数据：

- 待办事项总数
- 已完成项目总数
- 未完成项目总数
- 已完成项目的百分比

虽然我们可以为每个统计数据创建一个 selector ，但更简单的方法是创建一个可以返回包含我们需要的数据的对象的 selector。我们把此 selector 称为`todoListStatsState`：

```javascript
const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(filteredTodoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
```

要读取`todoListStatsState`的值，我们再次使用`useRecoilValue()`：

```jsx
function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}
```

综上，我们创建了一个满足我们所有要求的待办事项列表应用：

- 添加待办事项
- 编辑待办事项
- 删除待办事项
- 筛选待办事项
- 显示有用的统计数据
