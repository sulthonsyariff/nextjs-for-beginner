import { useDispatch, useSelector } from "react-redux"
// component
import Metadata from '../components/Metadata'
import { decrement, increment, incrementByAmount } from '../redux/counter';

const Home = (props) => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <Metadata title="Homepage">
      {/* <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      </div> */}
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
    </Metadata>
  )
}

export default Home;