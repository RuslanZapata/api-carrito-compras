import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

export function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="animate-pulse">
          <CardHeader>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </CardHeader>
          <CardContent>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </CardContent>
          <CardFooter>
            <div className="h-8 bg-gray-200 rounded w-full"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}