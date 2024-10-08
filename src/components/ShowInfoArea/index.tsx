import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const ShowInfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {

    const handlePreviousMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1); 
        currentDate.setMonth( currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}- ${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1); 
        currentDate.setMonth( currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}- ${currentDate.getMonth() + 1}`)
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePreviousMonth}>←</C.MonthArrow>
                <C.MonthName>{formatCurrentMonth(currentMonth)}</C.MonthName>
                <C.MonthArrow onClick={handleNextMonth}>→</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receita" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem 
                    title="Balanço" 
                    value={income - expense}
                    color={(income-expense) < 0 ? 'red' : 'green'}
                    />
            </C.ResumeArea>
        </C.Container>
    );
}