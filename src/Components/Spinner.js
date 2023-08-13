import { Dna, MagnifyingGlass,ProgressBar,Rings} from  'react-loader-spinner';

export function DnaSpinner() {
    return ( 
        <div  style={Styles.spinner}>
            <Dna
  visible={true}
  height="200"
  width="200"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
        </div>
     );
}

export function MagnifyingGlassSpinner() {
    return ( 
        <div style={Styles.spinner}>
            <MagnifyingGlass
  visible={true}
  height="200"
  width="200"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
        </div>
     );
}

export function ProgressBarSpinner() {
    return ( 
        <div style={Styles.spinner}>
           <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>
        </div>
     );
}

export function RingsSp(){
    return(
        <div style={Styles.spinner}>
            <Rings
  height="80"
  width="80"
  color="#4fa94d"
  radius="6"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>
        </div>
    )
}

const Styles={
    spinner:{
        marginLeft:"45%",
        marginTop:"15%",
    }
  }