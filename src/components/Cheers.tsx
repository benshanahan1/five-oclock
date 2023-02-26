import { pickRandom } from "@/utils/arrays";

interface IProps {
    message: string;
}

const emojis: string[] = ["🍻", "🥂", "🍸", "🍹", "🍺", "🎉", "🎊", "🥳", "🔥", "🍷", "🫗", "🧋", "🧃", "🥤", "🧉", "🍕", "🤪", "🤠"];
const maxStringLength = 3;

function getRandomEmojiString() {
    let emojiString = "";
    const n = Math.ceil(Math.random() * maxStringLength);
    for (let i = 0; i < n; i++) {
        emojiString += pickRandom(emojis);
    }
    return emojiString;
}

export default function Cheers(props: IProps) {
    return (
        <div>
            {props.message}
            <span className="text-4xl lg:text-6xl">{getRandomEmojiString()}</span>
        </div>
    );
}