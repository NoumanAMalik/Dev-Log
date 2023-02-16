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
                    fontFamily={"JetBrains Mono"}
                    code={() => `
#include <iostream>

int main(int argc, char* argv[]) {
    std::cout << "Hello World" << "\\n";
}
                `}
                />
            </Rect>
        </>
    );

    yield* slideTransition(Direction.Bottom, 2);
});
