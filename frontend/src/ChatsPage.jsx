import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic(
        '6d6c7803-e0ed-4894-a6e3-f6ef92046202',
        props.user.username, 
        props.user.secret
    );
    return (
    <div style={{height: '100vh'}}>

        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}  style= {{height: '100%'}} />

        </div>
    )
}

export default ChatsPage;