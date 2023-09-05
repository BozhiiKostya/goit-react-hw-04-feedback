import { nanoid } from 'nanoid';
import { Button, OptionsWraper } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <OptionsWraper>
        {options.map(option => {
          return (
            <Button
              key={nanoid()}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </Button>
          );
        })}
      </OptionsWraper>
    </>
  );
};
