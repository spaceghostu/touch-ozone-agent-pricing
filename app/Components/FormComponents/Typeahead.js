// import React from 'react'
// import InputWrapper from './InputWrapper'
// import { Controller } from 'react-hook-form';
// import Autocomplete from 'react-autocomplete';
// import styled from 'styled-components'

// export default function Typeahead({ label, width, sup, noBorder, control, name, taller, options }) {
//     return (
//         <InputWrapper label={label} width={width} sup={sup} noBorder={noBorder} taller={taller} noPadding>
//             <Controller
//                 control={control}
//                 name={name}
//                 render={({
//                     field: { onChange, onBlur, value, name, ref },
//                     fieldState: { invalid, isTouched, isDirty, error },
//                     formState,
//                 }) => (
//                     <Autocomplete
//                         style={{ width: '100%', height: '100%' }}
//                         getItemValue={v => v}
//                         items={options}
//                         renderItem={(item, isHighlighted) =>
//                             <Item key={item} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
//                                 {item}
//                             </Item>
//                         }
//                         shouldItemRender={(item, value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1}
//                         value={value}
//                         onChange={onChange}
//                         onSelect={onChange}
//                         onBlur={onBlur}
//                         wrapperStyle={{ width: '100%', height: '100%' }}
//                         inputProps={{ style: { width: '100%', height: '100%', boxSizing: 'border-box', border: 'none', padding: '5px' } }}
//                     />
//                 )}
//             />
//         </InputWrapper>
//     )
// }

// const Item = styled.View`
//     padding: 5px;
// `