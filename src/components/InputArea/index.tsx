import { useEffect, useState } from 'react';
import * as C from './styles';
import { Item } from '../../@types/Item';
import { categories } from '../../data/categories';
import dayjs from 'dayjs'
import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
  onAdd: (item: Item, isEdit?: boolean, index?: number) => void;
  inEdition?: any
};

export const InputArea = ({ onAdd, inEdition }: Props) => {
  console.log("inputarea", inEdition)
  const [dateField, setDateField] = useState<any>('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const date = dayjs(dateField).toDate();

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];
    console.log("data: ", dateField)

    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if (titleField === '') {
      errors.push('Título vazio!');
    }
    if (valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if (!dayjs(dateField).isValid()) {
      errors.push('Data inválida!');
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      console.log(date)
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      }, isEdit, inEdition?.index);
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  useEffect(() => {
    if (inEdition?.values) {
      setTitleField(inEdition?.values.title ?? "")
      setValueField(inEdition?.values.value ?? 0)
      setCategoryField(inEdition?.values.category ?? "")
      setIsEdit(true)
    }

  }, [inEdition])

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
          <>
            <option></option>
            {categoryKeys.map((key, index) => {
              console.log(key)
              return (
                <option key={index} value={key}>{categories[key].title}</option>
              )
            })}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>{isEdit ? "Editar" : "Adicionar"} </C.Button>
      </C.InputLabel>
    </C.Container>
  );
}