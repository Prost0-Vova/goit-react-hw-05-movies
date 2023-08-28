import { MagnifyingGlass } from  'react-loader-spinner';
import PropTypes from 'prop-types';
import {Div} from "./Loader.styled" 

export default function Loading () {

return(
  <Div>
<MagnifyingGlass
  visible={true}
  height="100"
  width="100"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
</Div>
)



}


Loading.propTypes = {
    ariaLabel: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    wrapperClassName: PropTypes.string,
    wrapperStyle: PropTypes.object,
}

