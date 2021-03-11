import React, {useState} from 'react'
import 'antd/dist/antd.css'

import { Input,Radio,Modal, Button } from 'antd';
import './App.css';
import key1 from './img/key1.png'
import key2 from './img/key2.png'
import key3 from './img/key3.png'
import {key} from "./key";

function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [value, setValue] = React.useState();
    const [inputValue, setInputValue] = React.useState('');
    const [inputArr, setInputArr] = React.useState([]);

    const onChange = e => {
        setValue(e.target.value);
    };
    const handleOk = (e) => {
        setIsModalVisible(false);
        setInputValue('')
         translateAlphabet(key[value],inputValue)


    };


    const translateAlphabet = (arr , str) =>{
        let arrStr = str.toUpperCase().split("");
        let verifyAlpha = [];

        for (let i = 0; i < arrStr.length; i++) {
            verifyAlpha = [...verifyAlpha, arr[arrStr[i]]];
        }
        return setInputArr([...inputArr, verifyAlpha.join(' ')]);

    };
        const showModal = () => {
        setIsModalVisible(true);
    };


    const handleCancel = () => {
        setIsModalVisible(false);
    };
const inputChange = e =>{
    setInputValue(e.target.value)
}
  return (
    <div className="App">
        <h2>Taron Grigoryan</h2>
      <p>Փոխարինագիր գաղտնագրություն</p>
        <Input onChange={inputChange} placeholder={'Մուտքագրել Բառը'} value={inputValue} />

        <div>
            <Button disabled={!inputValue} type="primary" onClick={showModal}>
                Վերծանել
            </Button>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={"key1"}><img src={key1}/></Radio>
                    <Radio value={"key2"}><img src={key2}/></Radio>
                    <Radio value={"key3"}><img src={key3}/></Radio>
                </Radio.Group>
            </Modal>

        </div>
        {inputArr.map((i,a) =><div className={"write"} key={a} >{i}</div>
        )}
    </div>
  );
}

export default App;
