import Image from "next/image";
import {
  Flex,
  Heading,
  Highlight,
  Text,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

import {
  TestResult as ITestResult,
  getPersonalityClassGroupByTestScores,
} from "../../lib/personality-test";

interface TestResultProps {
  testResult: ITestResult;
}

export default function TestResult(props: TestResultProps) {
  const personalityClassGroup = getPersonalityClassGroupByTestScores(
    props.testResult.testScores
  );

  return (
    <Flex
      my={4}
      w={{
        base: "full",
        lg: "50%",
      }}
      h="full"
      px={8}
      gap={4}
      alignItems="center"
      direction="column"
    >
      <Heading
        id={personalityClassGroup.type}
        as="h1"
        textAlign="center"
      >
        <Highlight
          query={personalityClassGroup.type}
          styles={{ color: "primary.500" }}
        >
          {`${personalityClassGroup.type} - ${personalityClassGroup.name}`}
        </Highlight>
      </Heading>
      <Text
        fontSize="lg"
        fontWeight="bold"
        textAlign="center"
      >
        {personalityClassGroup.nameDescription}
      </Text>
      <Image
        alt="illustration"
        src={`/images/mbti/${personalityClassGroup.type.toLowerCase()}.png`}
        width={200}
        height={200}
      />
      <Heading
        scrollMarginTop={8}
        id="description"
        as="h1"
        my={8}
        fontSize="lg"
        textAlign="center"
      >
        {personalityClassGroup.epithet}
      </Heading>
      {personalityClassGroup.description
        .split(/\.\n+/g)
        .map((description) =>
          description.endsWith(".") ? description : `${description}.`
        )
        .map((description, index) => (
          <Text
            key={index}
            textAlign="justify"
          >
            {`${description}`}
          </Text>
        ))}
      <Heading
        scrollMarginTop={8}
        id="jungian-functional-preference-ordering"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Character Race and Class Options
      </Heading>
      <Table>
        <Tbody>
          <Tr>
            <Th>Option 1</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.dominant}
            </Td>
          </Tr>
          <Tr>
            <Th>Option 2</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.auxiliary}
            </Td>
          </Tr>
          <Tr>
            <Th>Option 3</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.tertiary}
            </Td>
          </Tr>
          <Tr>
            <Th>Option 4</Th>
            <Td>
              {personalityClassGroup.jungianFunctionalPreference.inferior}
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Heading
        scrollMarginTop={8}
        id="general-traits"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        {`${personalityClassGroup.type}s You May Know`}
      </Heading>
      <UnorderedList>
        {personalityClassGroup.generalTraits.map((trait, index) => (
          <ListItem
            my={2}
            key={index}
            textAlign="justify"
          >
            {trait}
          </ListItem>
        ))}
      </UnorderedList>
      <Heading
        scrollMarginTop={8}
        id="relationship-strengths"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Character Personality Traits
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.relationshipStrengths.map(
          (relationshipStrength, index) => (
            <ListItem
              my={2}
              key={index}
              textAlign="justify"
            >
              {relationshipStrength}
            </ListItem>
          )
        )}
      </UnorderedList>
      <Heading
        scrollMarginTop={8}
        id="relationship-weaknesses"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Character Flaws
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.relationshipWeaknesses.map(
          (relationshipWeakness, index) => (
            <ListItem
              my={2}
              key={index}
              textAlign="justify"
            >
              {relationshipWeakness}
            </ListItem>
          )
        )}
      </UnorderedList>
      <Heading
        scrollMarginTop={8}
        id="success-definition"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Character Ideals
      </Heading>
      {personalityClassGroup.successDefinition
        .split(/\.\n+/g)
        .map((successDefinition) =>
          successDefinition.endsWith(".")
            ? successDefinition
            : `${successDefinition}.`
        )
        .map((successDefinition, index) => (
          <Text
            key={index}
            textAlign="justify"
          >
            {`${successDefinition}`}
          </Text>
        ))}
      <Heading
        scrollMarginTop={8}
        id="strengths"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Positive Table Behaviors
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.strengths.map((strength, index) => (
          <ListItem
            my={2}
            key={index}
            textAlign="justify"
          >
            {strength}
          </ListItem>
        ))}
      </UnorderedList>
      <Heading
        scrollMarginTop={8}
        id="special-gifts"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Negative Table Behaviors
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.gifts.map((gift, index) => (
          <ListItem
            my={2}
            key={index}
            textAlign="justify"
          >
            {gift}
          </ListItem>
        ))}
      </UnorderedList>
      <Heading
        scrollMarginTop={8}
        id="potential-problem-areas"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        Download Your Character Sheet
      </Heading>
      {personalityClassGroup.potentialProblemAreas.length === 1 ? (
        personalityClassGroup.potentialProblemAreas[0]
          .split(/\.\n+/g)
          .map((potentialProblemArea) =>
            potentialProblemArea.endsWith(".")
              ? potentialProblemArea
              : `${potentialProblemArea}.`
          )
          .map((potentialProblemArea, index) => (
            <Text
              key={index}
              textAlign="justify"
              alignSelf="start"
            >
              {`${potentialProblemArea}`}
            </Text>
          ))
      ) : (
        <UnorderedList w="full">
          {personalityClassGroup.potentialProblemAreas.map(
            (potentialProblemArea, index) => (
              <ListItem
                my={2}
                key={index}
                textAlign="justify"
              >
                {potentialProblemArea}
              </ListItem>
            )
          )}
        </UnorderedList>
      )}
      <Button
        mt={4} // Margin top for spacing
        colorScheme="blue" // Use Chakra UI color scheme for light blue
        onClick={() => window.open("https://admiraladventures.games/pregenerated-characters", "_blank")}
      >
        Download Character Sheet
      </Button>
      <Heading
        scrollMarginTop={8}
        id="explanation-of-problems"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        TBD
      </Heading>
      {personalityClassGroup.explanationOfProblems
        .split(/\.\n+/g)
        .map((explanationOfProblem) =>
          explanationOfProblem.endsWith(".")
            ? explanationOfProblem
            : `${explanationOfProblem}.`
        )
        .map((explanationOfProblem, index) => (
          <Text
            key={index}
            textAlign="justify"
            alignSelf="start"
          >
            {`${explanationOfProblem}`}
          </Text>
        ))}
      <Heading
        scrollMarginTop={8}
        id="solutions"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        TBD
      </Heading>
      {personalityClassGroup.solutions
        .split(/\.\n+/g)
        .map((solution) => (solution.endsWith(".") ? solution : `${solution}.`))
        .map((solution, index) => (
          <Text
            key={index}
            textAlign="justify"
            alignSelf="start"
          >
            {`${solution}`}
          </Text>
        ))}
      <Heading
        scrollMarginTop={8}
        id="living-happily-tips"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        TBD
      </Heading>
      {personalityClassGroup.livingHappilyTips
        .split(/\.\n+/g)
        .map((tips) => (tips.endsWith(".") ? tips : `${tips}.`))
        .map((tips, index) => (
          <Text
            key={index}
            textAlign="justify"
            alignSelf="start"
          >
            {`${tips}`}
          </Text>
        ))}
      {personalityClassGroup.suggestions !== undefined &&
        personalityClassGroup.suggestions.length === 1 && (
          <>
            <Heading
              scrollMarginTop={8}
              id="specific-suggestions"
              my={4}
              as="h2"
              size="md"
              textAlign="center"
            >
              Specific Suggestions
            </Heading>
            {personalityClassGroup.suggestions[0]
              .split(/\.\n+/g)
              .map((suggestion) =>
                suggestion.endsWith(".") ? suggestion : `${suggestion}.`
              )
              .map((suggestion, index) => (
                <Text
                  key={index}
                  textAlign="justify"
                  alignSelf="start"
                >
                  {`${suggestion}`}
                </Text>
              ))}
          </>
        )}
      {personalityClassGroup.suggestions !== undefined &&
        personalityClassGroup.suggestions.length > 1 && (
          <>
            <Heading
              scrollMarginTop={8}
              id="specific-suggestions"
              my={4}
              as="h2"
              size="md"
              textAlign="center"
            >
              Specific Suggestions
            </Heading>
            <UnorderedList w="full">
              {personalityClassGroup.suggestions!.map((suggestion, index) => (
                <ListItem
                  my={2}
                  key={index}
                  textAlign="justify"
                >
                  {suggestion}
                </ListItem>
              ))}
            </UnorderedList>
          </>
        )}
      <Heading
        scrollMarginTop={8}
        id="ten-rules-to-live-to-achieve-success"
        my={4}
        as="h2"
        size="md"
        textAlign="center"
      >
        TBD
      </Heading>
      <UnorderedList w="full">
        {personalityClassGroup.tenRulesToLive.map((rule, index) => (
          <ListItem
            my={2}
            key={index}
            textAlign="justify"
          >
            {rule}
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}

