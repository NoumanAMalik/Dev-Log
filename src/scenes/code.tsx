import { makeScene2D } from "@motion-canvas/2d";
import { waitUntil } from "@motion-canvas/core/lib/flow";
import { Circle } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import { all } from "@motion-canvas/core/lib/flow";
import {
    CodeBlock,
    edit,
    insert,
    lines,
    word,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { createSignal } from "@motion-canvas/core/lib/signals";
import { Rect } from "@motion-canvas/2d/lib/components";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { Direction } from "@motion-canvas/core/lib/types";

export default makeScene2D(function* (view) {
    const code = createRef<CodeBlock>();
    const codeBlock = createRef<Rect>();

    yield* waitUntil("Hello World");

    yield view.add(
        <>
            <Rect
                offset={-1}
                ref={codeBlock}
                x={-960 + 80}
                y={-540 + 80}
                height={1080 - 160}
                width={960}
                clip
            >
                <CodeBlock
                    ref={code}
                    fontSize={24}
                    lineHeight={36}
                    offsetX={-1}
                    x={-960 / 2}
                    fontFamily={"JetBrains Mono"}
                    language={"c++"}
                    code={() => `
#include <iostream>

int main() {
    std::cout << "Hello World" << "\\n";
}
                `}
                />
            </Rect>
        </>
    );

    yield* slideTransition(Direction.Bottom, 1.34);

    yield* waitUntil("Arguments");

    yield* code().edit(2)`
#include <iostream>

int main(${insert(`int argc, char* argv[]`)}) {
    std::cout << "Hello World" << "\\n";
}
    `;

    yield* waitUntil("Parse Arguments");
});
