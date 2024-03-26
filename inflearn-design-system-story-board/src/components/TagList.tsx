import {useState} from "react";
import TagButton from "./TagButton.tsx";

interface TagListProps<T extends string> {
    tagList: T[];
    onTagClick: (tag: T) => void;
}

export const TagList = <T extends string>({
                                              tagList,
                                              onTagClick
                                          }: TagListProps<T>) => {
    const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);
    return (
        <div className={`flex gap-x-4`} onClick={(event) => {
            /** div tag 에서 이벤트 handle 을 하지만 실질적으로 발생하는 event 는 HTMLButtonElement 에서 발생 시킨다. */
            const eventTarget = event.target as HTMLButtonElement;
            /** 눌린 버튼의 text 의 값을 가져온다. */
            const tag = eventTarget.textContent as T;
            onTagClick(tag);
        }}>
            {tagList.map((tag) => (
                <TagButton
                    key={tag}
                    isChecked={tag == selectedTag}
                    onClick={() => setSelectedTag(tag)}>{tag}</TagButton>
            ))}
        </div>
    );
};

export default TagList;