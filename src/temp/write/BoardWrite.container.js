import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_PRODUCT } from './BoardWrite.queries';
import BoardWriteUI from './BoardWrite.presenter';


export default function BoardWrite(props) {
    const router = useRouter()
    const isFalse = false;
    const isTrue = true;

    const [writer,setName ] = useState()
    const [password,setPassword] = useState()
    const [title,setTitle] = useState()
    const [contents,setContents] = useState()
    const [createBoard] = useMutation(CREATE_PRODUCT)
    const [disabled,setDisabled] = useState(true)

    const [errName,nameErr ] = useState("")
    const [errPw,pwErr] = useState("")
    const [errTitle,titleErr] = useState("")
    const [errContents,contentsErr] = useState("")


    function onChangeName(event) {
        setName(event.target.value)
        if(event.target.value) {
            nameErr("")
        } 
        if(disabled === false && event.target.value === "") {
            setDisabled(true)
        }
        if(event.target.value && title && password && contents) {
            setDisabled(false)
        }
    }

    async function onChangePw(event) {
        setPassword(event.target.value)
        if(event.target.value) {
            pwErr("")
        }
        if(disabled === false && event.target.value === "") {
            setDisabled(true)
        }
        if(writer && title && event.target.value && contents) {
            setDisabled(false)
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
        if(event.target.value) {
            titleErr("")
        } 
        if(disabled === false && event.target.value === "") {
            setDisabled(true)
        }
        if(writer && event.target.value && password && contents) {
            setDisabled(false)
        }
    }

    function onChangeContents(event) {
        setContents(event.target.value)
        if(event.target.value) {
            contentsErr(() => "")
        } 
        if(disabled === false && event.target.value === "") {
            setDisabled(true)
        }
        if(writer && title && password && event.target.value) {
            setDisabled(false)
        }
        console.log(disabled)
    }

    const  submit = async () =>{
        try {
            if(writer){
                nameErr("이름을 확인해주세요.")
            } else {
                nameErr("")
            }
            if(password){
                pwErr("비밀번호를 확인해주세요.")
            } else {
                pwErr("")
            }
            if(title){
                titleErr("제목을 확인해주세요.")
            } else {
                titleErr("")
            }
            if(contents){
                contentsErr("내용을 확인해주세요.")
            } else {
                contentsErr("")
            }
            
            if(writer && password && title && contents){
                const result = await createBoard({
                    variables: {
                        createBoardInput : {writer: writer, title: title, contents: contents , password: password}
                    }
                })
                console.log(result.writer)
                console.log(result.data.createBoard)
                
                router.push(`/routed/${result.data.createBoard._id}`)
            }
            
        } catch(error) {
            alert(`error message: ${error.message}`)
        }

        // console.log(result.data)
        
    }

    return <BoardWriteUI
                onChangeName={onChangeName}
                onChangePw={onChangePw}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                submit={submit}
                disabled={disabled}
                isEdit={props.isEdit}/>

}