import SchematicComponent from "@/components/schematic/SchematicComponent";

function ManagePlan() {
  return (
    <div className="container mx-auto p-2 max-sm:p-0">
      <div className="mx-9 max-sm:mx-3">

      <h1 className="text-2xl font-bold mb-4 my-8">Manage Your Plan</h1>
      <p className="text-gray-600 mb-4">
        Manage your subscription and billing details here.
      </p>

      <SchematicComponent componentId="cmpn_aeDkwrJYZU1" />
      </div>
    </div>
  );
}

export default ManagePlan;
