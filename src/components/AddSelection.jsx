import { Radio } from "./Radio"

function AddSelection(props) {
  return <div className="addSelectoin">
    <Radio value='all' name='movieType' checked={props.type === 'all'} cb={props.cb} />
    <Radio value='movie' name='movieType' checked={props.type === 'movie'} cb={props.cb} />
    <Radio value='series' name='movieType' checked={props.type === 'series'} cb={props.cb} />
  </div>
}

export {AddSelection}