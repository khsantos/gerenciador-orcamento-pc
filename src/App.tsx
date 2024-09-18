import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './@types/Item'
import { items } from './data/items';
import { Category } from './@types/Category'
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

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (

    <C.Container>
      <C.Header>
        <C.HeaderText>Gerenciador de Orçamentos</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de Informações */}
        <ShowInfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        {/* Área de Inserção */}
        <InputArea onAdd={handleAddItem} />

        {/* Tabela de Itens */}
        <TableArea list={filteredList} />
      </C.Body>

    </C.Container>

  );
}

export default App;