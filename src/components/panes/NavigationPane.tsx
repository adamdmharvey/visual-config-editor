import { FocusRing, FocusScope, useFocusRing } from 'react-aria';
import { inspectorWidth } from '../../App';
import { useStoreState } from '../../state/Hooks';
import Toast from '../atoms/Toast';

interface NavigationPaneProps {
  width: number;
}

/**
 * @see
 * @returns
 */
const NavigationPane = (props: any, { width }: NavigationPaneProps) => {
  const navigation = useStoreState((state) => state.navigation);
  const NavPage = navigation.component.Component;

  return (
    <FocusScope contain={false}>
      <div
        ref={props.navigationPane}
        aria-label="Navigation Pane"
        className="h-full border-l border-circle-gray-300 pt-6 bg-white flex flex-col overflow-y-hidden"
        style={{ width }}
        id="Naviagtion-Pane"
      >
        <NavPage {...navigation.props} />
        <div
          id="Navigation-Pane"
          className="p-6 absolute bottom-0 right-0 my-20 pointer-events-none"
          style={{ width: inspectorWidth }}
        >
          <Toast />
        </div>
      </div>
    </FocusScope>
  );
};

export default NavigationPane;
