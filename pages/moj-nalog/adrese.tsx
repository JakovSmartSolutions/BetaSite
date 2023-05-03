import { AddressField } from 'components/shared/AddressField';
import { Breadcrumb } from 'components/shared/Breadcrumb';
import { DashboardWrap } from 'components/shared/DashboardWrap';
import { useAuthStore } from 'stores/AuthStore';

const AddressesPage = () => {
  const { user } = useAuthStore();
  return (
    <>
      <Breadcrumb name="Adrese" />
      <DashboardWrap className="addressesPage" title="Adrese">
        <h2>Ova adresa će biti korišćena pri kupovini.</h2>
        <div className="items">
          <AddressField
            userID={user?.id || 0}
            data={user?.addresses?.find((el) => el.type === 'billing_address')}
            type="billing_address"
          />
          <AddressField
            userID={user?.id || 0}
            data={user?.addresses?.find((el) => el.type === 'shipping_address')}
            type="shipping_address"
          />
        </div>
      </DashboardWrap>
    </>
  );
};

export default AddressesPage;
