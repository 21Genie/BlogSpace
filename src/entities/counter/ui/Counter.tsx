import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../modal/slice/counterSlice';
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const increment = () => dispatch(counterActions.increment());
    const decrement = () => dispatch(counterActions.decrement());

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <Button onClick={increment} data-testid="increment">+1</Button>
            <Button onClick={decrement} data-testid="decrement">-1</Button>
        </div>
    );
};
