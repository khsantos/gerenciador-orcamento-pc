import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './@types/Item'
import { items } from './data/items';
import { categories } from './data/categories';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { ShowInfoArea } from './components/ShowInfoArea';
import { InputArea } from './components/InputArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [inEdition, setInEdition] = useState<any>({});

  const handleRemoveItem = (index: number) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  const handleUpdateItem = (index: number, values: Item) => {
    console.log(values)
    setInEdition({ index, values })
  }

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item, isEdit?: boolean, index?: number) => {
    if (isEdit && index !== undefined) {
      
      let newList = [...list];
      newList[index] = { ...item };
      setList(newList);
    } else {
      let newList = [...list];
      newList.push(item);
      setList(newList);
    }
  }

  return (

    <C.Container>
        <C.HeaderText>Gerenciador de Orçamentos</C.HeaderText>
      <C.Body>
        <ShowInfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} inEdition={inEdition}/>

        <TableArea list={filteredList} onRemove={handleRemoveItem} onUpdate={handleUpdateItem}/>
      </C.Body>

    </C.Container>

  );
}

export default App;