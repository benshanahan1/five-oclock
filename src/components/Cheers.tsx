import { pickRandom } from "@/utils/arrays";

interface IProps {
    message: string;
}

const emojis: string[] = ["ðŧ", "ðĨ", "ðļ", "ðđ", "ðš", "ð", "ð", "ðĨģ", "ðĨ", "ð·", "ð§", "ð§", "ðĨĪ", "ð§", "ð", "ðĪŠ", "ðĪ "];
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
            {' '}
            <span className="text-4xl lg:text-6xl">{getRandomEmojiString()}</span>
        </div>
    );
}